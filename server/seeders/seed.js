const db = require('../config/connection');
const { Profile, Company } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const companySeeds = require('./companySeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Company.deleteMany({});
    await Company.create(companySeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
