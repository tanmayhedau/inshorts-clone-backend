import News from "../models/news.js";


export const getNews = async (req, res) => {
  try {
    const news = await News.find({});
    return res.status(200).json(news);
  } catch (error) {
    console.log('Error', error.message);
  }
};