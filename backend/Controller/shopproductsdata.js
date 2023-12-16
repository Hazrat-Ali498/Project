import productStructureModel from "../Models/shopproductsdata.js";


    export const getproductdata = async(req , res )=>{
        try {
            const productData = await productStructureModel.find();
            res.json(productData);
            console.log(productData);
        } 
        catch (error) {
            console.log("Not found any data");
        }
    }

    export const createproductdata= async(req, res)=>{
       const {Type, productName,productPrice,brand, productImage,category }=req.body;

        const newProduct = new productStructureModel({
            Type,
            productName,
            productPrice,
            productImage:req.file.path,
            brand,
            category,

        });

 try {
            await newProduct.save();
            res.json(newProduct);
        } catch (error) {
            console.log("Not Saved...");
        }
};

export const deleteProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      console.log("Deleting product with ID:", productId);
      await productStructureModel.findByIdAndDelete(productId);
      res.json({ message: 'Delete Successfully' });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { productName, Type, productPrice, brand } = req.body;
    try {
      const updatedProduct = await productStructureModel.findByIdAndUpdate(
        id,
        { productName, Type, productPrice, brand },
        { new: true }
      );
      if (updatedProduct) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // export const getProductByCategory = async (req, res)=>{
  //   const {category}=req.body;
  //   console.log(category);

  //   try {
  //     const ProductCategory = await productStructureModel.find({category});
  //     console.log(ProductCategory);
  //     res.json(ProductCategory);
  //   } catch (error) {
  //       console.log("Not Found any Data.",error);
  //   }
  // }

    