const crypto = require('crypto');
const dotenv = require("dotenv");

dotenv.config();
const algorithm ="aes-256-cbc";
const secretKey = Buffer.from(process.env.ENCRYPTION_KEY,"hex");


exports.encryptedApikey=(UserApi)=>{
    const iv=crypto.randomBytes(16);
    const cipher=crypto.createCipheriv(
        algorithm,
        secretKey,
        iv
    )
    let encrypted=cipher.update(
        UserApi,
        "utf-8",
        "hex"
    )
    encrypted+=cipher.final("hex")

    return {
   encryptedData: encrypted,
   iv: iv.toString("hex")
};
}
exports.decryptApikey=(UserApiKey,iv)=>{
    const decipher=crypto.createDecipheriv(
        algorithm,
        secretKey,
        Buffer.from(iv,"hex")
    )
    let decrypted=decipher.update(
        UserApiKey,
        "hex",
        "utf-8"
    )
    decrypted+=decipher.final("utf-8")
    return decrypted;
}