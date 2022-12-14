const db = require('../config/connection');
const { Profile, Employee } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const employeeSeeds = require('./employeeSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Employee.deleteMany({});
    await Employee.create(employeeSeeds);

    const user = await Profile.findOne({name: 'Brian Kernighan'})
    const employee = await Employee.findOne({name: 'Brian Jr. Kernighans'})
    // owner.company.push(company._id);
    // employees.push(employee._id);

    const updatedUser = await user.save()
   
    // console.log(updatedOwner)
    // console.log(employee);

    // console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
