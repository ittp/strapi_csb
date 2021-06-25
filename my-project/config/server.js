module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "strapi.ittps.ru",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "208b7db366850bd9c186fa47a67deb54")
    }
  }
});
