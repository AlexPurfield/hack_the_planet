const { User, Product, Category, Order } = require('../../models');
const { signToken, AuthenticationError } = require('../../middleware/auth');
const stripe = require('stripe')('sk_test_51O84RdCtpfsF2ochuYUQVSK7rXUKROnSNJGmRG1U2j573D6i0CTtr2HtHKvaxwkTsWvKNy7pDBYW5L5n7u6NE4Ni003bjF8b37');


module.exports = {
  Query: {
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw AuthenticationError;
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = await Order.create({ products: args.products });
      const line_items = [];

    //   const { products } = await order.populate('products');
    const {products} = await Order.findById(order._id).populate('products')
        // console.log(currentOrder)
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw AuthenticationError;
    },
};


