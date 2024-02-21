module.exports = {
  async up(db, client) {
    await db
      .collection("jobPostings").createIndex ({"title": -1});
  },

  async down(db, client) {
      await db.collection("jobPostings").dropIndex("title_-1");
  }
};
