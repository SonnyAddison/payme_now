const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    const bob = await Profile.create(profileSeeds);

    console.log(bob);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
