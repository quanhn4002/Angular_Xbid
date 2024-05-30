import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
export async function signin(req, res) {
  try {
    const data = req.body;
    // kiểm tra user theo email
    const userExist = await User.findOne({ email: data.email });
    if (userExist) return res.status(400).json({ message: "Email đã tồn tại" });
    // mã hóa mật khẩu
    if (data.password && data.password != "") {
      if (data.password.length < 6)
        return res
          .status(400)
          .json({ message: "Mật khẩu phải lớn hơn 6 ký tự" });
    }
    const passwordHash = await bcryptjs.hash(data.password, 10);
    data.password = passwordHash;
    // tạo user
    const newUser = await User.create(data);
    if (newUser) {
      newUser.password = undefined;
      res.status(201).json({ message: "Tạo tài khoản thành công", newUser });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
export async function lognin(req, res) {
  const data = req.body;
  // kiểm tra username có tồn tại hay không
  const userExist = await User.findOne({ email: data.email });

  if (!userExist) {
    console.log(`User với email ${data.email} không tồn tại.`);
    return res.status(400).json({ message: `Sai tài khoản` });
  }

  // kiểm tra mật khẩu
  const isCheck = await bcryptjs.compare(data.password, userExist.password);

  if (!isCheck) {
    console.log(`Mật khẩu cho user với email ${data.email} không đúng.`);
    return res.status(400).json({ message: `Sai mật khẩu` });
  }

  // sau khi đăng nhập thành công
  // tạo token từ thư viện jwt
  const token = jwt.sign(
    { name: userExist.name, email: userExist.email },
    process.env.KEY_SECRET,
    { expiresIn: "5h" }
  );

  console.log(token);
  if (token) {
    userExist.password = undefined;
    res.status(201).json({
      message: "Đăng nhập thành công",
      data: userExist,
      token,
    });
  }
}
