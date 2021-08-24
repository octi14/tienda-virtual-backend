module.exports = mongoose => {
    const Product = mongoose.model(
      "product",
      mongoose.Schema(
        {
          owner: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );

    // We can add a category to categorize articles

    // Incase you want to replace _.id with id 
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });

    // const Blog = mongoose.model("blog", schema);

    return Product;
  };