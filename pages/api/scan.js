const cheerio = require('cheerio');
const Cors = require('cors')

const cors = Cors({
  methods: ['POST'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export const page_scan = async (req, res) => {
  await runMiddleware(req, res, cors)
  const { url } = req.query
  try {
    const response = await fetch(url);
    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    const title = $('title').text()
    const description = $('meta[name="description"]').attr('content')
    const icon = $('link[rel="icon"]').attr('href')
    res.send({ title, description, icon: icon ? `${url}${icon}` : null })
  } catch (error) {
    // console.error(error)
    res.send({ error, url })
  }

}

export default page_scan