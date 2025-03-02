/**
 * User API Controller
 */

import User from "../../models/User.js";

/**
 * Get a single user
 */
export const show = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.query().findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  return res.json(user);
};

/**
 * Get all users
 */
export const index = async (req, res, next) => {
  const users = await User.query();
  return res.json(users);
};

/**
 * Create a new user
 */
export const store = async (req, res, next) => {
  try {
    // validate incoming data (firstname, lastname, bio)
    const { firstname, lastname, bio } = req.body;

    if (!firstname || !lastname || !bio) {
      return res
        .status(400)
        .json({ message: "Firstname, lastname and bio are required." });
    }

    // create a new user
    const user = await User.query().insert({
      firstname,
      lastname,
      bio,
    });

    res.json({ message: "User created successfully.", user });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

/**
 * Update a user
 */
export const update = async (req, res, next) => {
  const { id } = req.params;
  const { firstname, lastname, bio } = req.body;
  try {
    // step 1: validaten, we need at least one field to update
    if (!firstname && !lastname && !bio) {
      res.status(400).json({
        message: "Firstname, lastname or bio are required",
      });
      return;
    }

    // step 2: check if the user with id exists
    const user = await User.query().findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    // step 3: update the user with id
    const updatedUser = await User.query().patchAndFetchById(id, {
      firstname,
      lastname,
      bio,
    });

    // step 4: return the updated user
    res.json({
      message: "User has been updated",
      user: updatedUser,
    });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

/**
 * Delete a user
 */
export const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    // check if record exists
    const userExists = await User.query().findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found." });
    }

    const user = await User.query().deleteById(id);
    res.json({ message: "User deleted successfully." });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
