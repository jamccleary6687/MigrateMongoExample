module.exports = {
  async up(db, client) {
    await db.collection("jobPostings").insertOne({ title: "Math Teacher1" });
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    await db.collection("jobPostings").deleteOne({title: "Math Teacher1"})
  },
};
