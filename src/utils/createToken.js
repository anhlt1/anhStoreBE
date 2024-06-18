import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {

    //giải thích các tham số trong sign()
    //1. userId: là id của user
    //2. process.env.JWT_SECRET: là chuỗi secret key để mã hóa token
    //3. expiresIn: là thời gian sống của token, ở đây là 30 ngày
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    // Set JWT thành 1 HTTP-Only cookie
    //giải thích các tham số trong cookie()
    //1. 'jwt': tên của cookie
    //2. token: giá trị của cookie
    //3. httpOnly: chỉ có server mới có thể truy cập vào cookie này
    //4. secure: chỉ gửi cookie nếu request là https
    //5. sameSite: chỉ gửi cookie nếu request đến từ cùng 1 domain
    //6. maxAge: thời gian sống của cookie, ở đây là 30 ngày
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: 'strict',
        maxAge: 30*24*60*60*1000
    })

    return token;
}

export default generateToken;