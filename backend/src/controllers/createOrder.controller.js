import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-8114890615443352-112118-e96bed1a55c6607eaac7382bc9d8c24f-2112492924' });
const preference = new Preference(client);

const createPreference = async (req, res) => {
  const { items } = req.body
  const response = await preference.create({
    body: {
      payment_methods: {
        excluded_payment_methods: [
          {
            id: "amex"
          },
          {
            id: "argencard"
          },
          {
            id: "cabal"
          },
          {
            id: "cmr"
          },
          {
            id: "cencosud"
          },
          {
            id: "cordobesa"
          },
          {
            id: "diners"
          },
          {
            id: "tarshop"
          },
          {
            id: "debcabal"
          },
          {
            id: "maestro"
          }
        ],
        excluded_payment_types: [],
        installments: 1
      },
      items,
    }
  })
  return res.status(201).json({ init_point: response.init_point });
}


export default { createPreference };



