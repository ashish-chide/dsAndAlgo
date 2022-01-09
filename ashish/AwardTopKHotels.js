// Award Top K Hotels
// Problem Statment:

// Booking.com wants to recognize k performing hotels. These hotels are being identified by analyzing their user reviews and calculating a review score for each of the hotels.

// To calculate the score they have:
//     A list of user reviews for each hotel
//     List of positive keywords
//     List of negative keywords
// Positive keywords weigh 3 points each and negative keywords weigh -1 each.
// For example, given the input below:
// positive keywords: “breakfast beach city center location metro view staff price”,
// negative keywords: “not”,
// number of hotels: m = 5,
// array of hotel ids: [1,2,1,1,2],
// number of reviews: n=5,
// array of reviews: [
// “This hotel has a nice view of the city center. The location is perfect.”,
// “The breakfast is ok. Regarding location, it is quite far from city center but the price is cheap so it is worth.”,
// “Location is excellent, 5 minutes from the city center. There is also a metro station very close to the hotel.”,
// “They said I couldn’t take my dog and there were other guests with dogs! That is not fair.”,
// “Very friendly staff and a good cost-benefit ratio. Its location is a bit far from the city center.”
// ],

// number of hotels we want to award: k = 2,

// then top k Hotels will be 2, 1.

function AwardKHotel(hotels, reviews, positive, negative, k) {
    const map = {};
  
    const getScore = (review) => {
      const cleanedStr = review.replace(/[.!,]/gi, "").toLowerCase().split(" ");
      let score = 0;
      for (let i = 0; i < positive.length; i++) {
        const element = positive[i];
        let pScore = cleanedStr.filter((el) => el == element).length;
        score = score + pScore * 3;
      }
  
      for (let i = 0; i < negative.length; i++) {
        const element = negative[i];
        let nScore = cleanedStr.filter((el) => el == element).length;
        score = score + nScore * -1;
      }
      return score;
    };
  
    for (let i = 0; i < hotels.length; i++) {
      const hotel = hotels[i];
      const review = reviews[i];
      const score = getScore(review);
      if (map[hotel]) map[hotel] += score;
      else map[hotel] = score;
    }
  
    const result = Object.entries(map).sort(([ida, a], [idb, b]) => {
      if (b == a) {
        return ida - idb;
      }
  
      return b - a;
    });
    return result.map((el) => Number(el[0]));
  }
  
  /*
  
  
  
  
  
  */
  const hotels = [1, 2, 1, 1, 2];
  const reviews = [
    `This hotel has a nice view of the city center. The location is perfect.`,
    `The breakfast is ok. Regarding location, it is quite far from city center but the price is cheap so it is worth.`,
    `Location is excellent, 5 minutes from the city center. There is also a metro station very close to the hotel.`,
    `They said I couldn’t take my dog and there were other guests with dogs! That is not fair.`,
    `Very friendly staff and a good cost-benefit ratio. Its location is a bit far from the city center.`,
  ];
  
  const positive = [
    "breakfast",
    "beach",
    "city",
    "center",
    "location",
    "metro",
    "view",
    "staff",
    "price",
  ];
  
  const negative = ["not"];
  
  console.log(AwardKHotel(hotels, reviews, positive, negative, 2));
  