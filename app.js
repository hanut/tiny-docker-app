const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.get('/', function (req, res) {
  let report = {
  	platform: process.platform,
  	memory: process.memoryUsage(),
  	env: {
  		PORT: process.env.PORT,
  		CUSTOM_VAR1: process.env.CUSTOM_VAR1,
  		CUSTOM_VAR2: process.env.CUSTOM_VAR2
  	}
  };
  res.json(report);
})
 
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));