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

    const owner = await Profile.findOne({name: 'Brian Kernighan'})
    const company = await Company.findOne({name: 'Brian Kernighans Sole care'})
    owner.company.push(company._id);
    console.log(owner);
    console.log(company);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
