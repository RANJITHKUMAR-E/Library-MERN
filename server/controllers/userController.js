exports.getAllUser=(req, res) =>
{
    res.status(200).json({status : "Get all users Done"});
}

exports.getUser=(req, res) =>
{
    res.status(200).json({status: "Get user Done"});
}

exports.createUser=(req, res) =>
{
    res.status(200).json({status: "Create user Done"});
}

exports.updateUser=(req, res) =>
{
    res.status(200).json({status: "Update user Done"});
}

exports.deleteUser=(req, res) =>
{
    res.status(200).json({status: "Delete user Done"});
}