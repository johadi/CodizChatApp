// Authentication related stuff can be handled here
// Export your controller as done below. don't use 'export default' since
// you are gonna export it with 'export *' in the index file of this folder

const signUp = (req, res) =>
  res.status(201).json('Handle Sign up logic');

const signIn = (req, res) =>
  res.status(200).json('Handle Sign in logic');

export { signUp, signIn };
