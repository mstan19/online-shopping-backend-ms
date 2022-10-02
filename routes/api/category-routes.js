const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint
 
router.get('/', async (req, res) => {
  // res.json("hello")
  const categoryData = await Category.findAll().catch((err)=> {
    res.status(500).json(err);
  });
  res.status(200).json(categoryData);
});
// const catAndProduct = await Category.findOne({where: {}}).catch((err)=> {
//   res.status(500).json(err);
// });
// res.status(200).json(getCategory);
// });
  // // find all categories
  // be sure to include its associated Products


router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500),json(err);
  }
  // // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(400).json(err);
  }
 
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id:req.params.id,
      }
    })
    if (!categoryData[0]) {
      res.status(404).json({ message: 'There is no category with this id.'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
})
  // update a category by its `id` value


router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id:req.params.id,
      },
    })
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // delete a category by its `id` value


module.exports = router;
