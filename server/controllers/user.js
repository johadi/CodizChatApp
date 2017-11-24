// User related stuff can be handled here
// Export your controller as done below. don't use 'export default' since
// you are gonna export it with 'export *' in the index file of this folder

const getUserProfile = (req, res) =>
  res.status(200).json('User Profile get retrieved');

const updateUserProfile = (req, res) =>
  res.status(200).json('User Profile get updated');

export { getUserProfile, updateUserProfile };
