module.exports = {
  async up(db, client) {
    await db
      .collection("jobPostings")
      .insertOne({ title: "English Teacher 1" });
  },

  async down(db, client) {
    await db
      .collection("jobPostings")
      .deleteOne({ title: "English Teacher 1" });
  },
};
