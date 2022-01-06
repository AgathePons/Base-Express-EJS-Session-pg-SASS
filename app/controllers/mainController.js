const dataMapper = require('../dataMapper');


const mainController = {
  homePage: (_req, res) => {
    res.render('homepage');
  },
  // TODO examples (not working)
  somePageWithListOfThings: async (req, res, next) => {
    try {
      const things = await dataMapper.getAllThings();
      if(things) {
        res.render('listpage', {
          things
        });
      } else {
        next();
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('There is an error 500!');
    }
  },
  somePageWithDetailsOfaThing: async (req, res, next) => {
    const numero = req.params.numero;
    try {
      const pokemon = await dataMapper.getOnePokemon(numero);
      if(pokemon) {
        res.render('detailPage', {
          pokemon
        });
      } else {
        next();
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('There is an error 500!');
    }
  }
};

module.exports = mainController;