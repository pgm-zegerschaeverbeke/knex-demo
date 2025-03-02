/**
 * Interest API Controller
 */

import Interest from "../../models/Interest.js";

/**
 * Get a single interest
 */
export const show = async (req, res, next) => {
  const id = req.params.id;
  const interest = await Interest.query().findById(id);

  if (!interest) {
    return res.status(404).json({ message: "Interest not found." });
  }

  return res.json(interest);
};

/**
 * Get all interests
 */
export const index = async (req, res, next) => {
  const interests = await Interest.query();
  return res.json(interests);
};

/**
 * Create a new interest
 */
export const store = async (req, res, next) => {
  try {
    // get name from request body
    const { name } = req.body;

    // check if record does not already exist
    const interestExists = await Interest.query().findOne({ name });
    if (interestExists) {
      return res.status(400).json({ message: "Interest already exists." });
    }

    // create a new interest
    const interest = await Interest.query().insert({ name });

    res.json({ message: "Interest created successfully.", interest });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

/**
 * Update an interest
 */
export const update = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    // step 1: validate if id & name are present in the request body
    if (!name) {
      res.status(400).json({
        message: "id and name are required",
      });
      return;
    }

    // step 2: check if the interest with id exists
    const interest = await Interest.query().findById(id);
    if (!interest) {
      res.status(404).json({
        message: "Interest not found",
      });
      return;
    }

    // step 3: check if no other interest with the same name exists
    const existingInterest = await Interest.query().where("name", name).first();
    if (existingInterest) {
      res.status(400).json({
        message: "Interest with the same name already exists",
      });
      return;
    }

    // step 4: update the interest with id
    const updatedInterest = await Interest.query().patchAndFetchById(id, {
      name,
    });

    // step 5: return the updated interest
    res.json({
      message: "Interest has been updated",
      interest: updatedInterest,
    });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

/**
 * Delete an interest
 */
export const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    // check if record exists
    const interestExists = await Interest.query().findById(id);
    if (!interestExists) {
      return res.status(404).json({ message: "Interest not found." });
    }

    const interest = await Interest.query().deleteById(id);
    res.json({ message: "Interest deleted successfully." });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
