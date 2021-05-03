/**
 * given a flight duration and movie data set in minutes, write a function
 * that will recommend two movies that will
 * - end exactly 30 minutes before the flight lands
 * - two movies do not repeat
 * - there are at least two movies in the movie dataset
 * - if there are more than two movie that could be picked from the the movie
 * - dataset then pick the one with the longest running time
 * - if there are no such movie then simply return [-1,-1]
 *
 * - state time complexity and space complexity
 *
 * Example -
 *  INPUT -
 *      flightDuration = 90 min
 *      movieDataSet = [1,5,9,10,11,20, 25,35, 40, 50,59]
 *  OUTPUT
 *      possible selection = [ [1,59], [10,50] , [20,40], [25,35] ]
 *      - movie must end exactly 30 min before flight lands so combined length of 2 movies must be 90-30 =60
 *      - since we have 4 options, we select the first 1,59 since it has the longest running time
 *      - final result = [1,59]
 *
 * // amazon screening
 *
 * Provided that the movie data set is in sorted order,
 * time complexity O(n) linear | and space comlexity O(k) where k<=n
 *
 * if the data set is not in sorted order then the time complexity O(n log n) using merge sort
 * space complexity is O(k) where k<=n
 *
 * @param {*} flightDuration  duration of the flight in minutes
 * @param {*} movieDataSet    list of movies in minutes
 */

const findMovieWithLongestLength = (result) => {
  // result is a list of lists
  // we need to keep track of maxLength and
  // the index of each movie
  let maxLength = -1;
  let indexOfMaxLength = -1;

  result.map((movie, index) => {
    let max = Math.max(...movie);
    if (max > maxLength) {
      maxLength = max;
      indexOfMaxLength = index;
    }
  });

  // following traditional loop will work just as fine as the map in line 36
  //   for (let index = 0; index < result.length; index++) {
  //     let max = Math.max(...result[index]);
  //     if (max > maxLength) {
  //       maxLength = max;
  //       indexOfMaxLength = index;
  //     }
  //   }

  return result[indexOfMaxLength];
};

const onFlightMovieRecommendation = (flightDuration, movieDataSet) => {
  // sort movieDataSet if not in ascending order
  // we'll presume the movieDataSet is in sorted order
  // if not we'll sort otherwise the result may not be desired one
  // check the test case third for flightDuration3 and movieDataSet3
  //movieDataSet.sort((a, b) => a - b);

  // if the flightDuration is less than 30 minute then we
  // can NOT recommend any movies
  let targetLength = flightDuration - 30;
  if (targetLength < 30) return [-1, -1];

  // if the flightDuration is greatern than 30 then we could possibly
  // recommend 2 movies if the following criteria matches

  // let's create two pointers left and right that we'll use to
  // iterate throught from the beginning and the end of the movie data set respectively
  // also let's store if any matches are found in the result list
  let left = 0,
    right = movieDataSet.length - 1;
  const result = [];

  // we know from given criteria that we'll have a movieDataSet with at least 2 movies upto N movies
  // iterate through the list until left pointer crosses over the right
  // on each iteration, sum the array elements that the left and the
  // right pointer is pointing from the movieDataset
  // if the sum equals (flightDuration -30) then save the movieDataSet elements to the result list
  // Next increase the left pointer and decrease the right pointer
  // since we can not use the same movie for recommendation twice

  // if the sum does not equal the (flightDuration-30) then we want to increas the
  // left pointer while the right pointer is kept fixed.
  while (left < right) {
    if (movieDataSet[left] + movieDataSet[right] === targetLength) {
      // we need 2D so need [] extra !!!
      result.push([movieDataSet[left], movieDataSet[right]]);
      left++;
      right--;
    } else {
      left++;
    }
  }

  // By this point we'll have traversed through the movie data set
  // and filled up the result list
  // if the result list is empty then we do not have recommendation
  // if the result list has exactly 2 movies, then we could recommend the movie
  // if the result list has more than 2 movies, then the length would be greater than 1 so
  // in such case we'd have to traversed through the result  list
  // to find the movie with the longest running time
  if (result.length === 0) {
    return [-1, -1];
  } else if (result.length === 1) {
    return result;
  } else {
    return findMovieWithLongestLength(result);
  }
};

const flightDuration1 = 30;
const flightDuration2 = 90;
const flightDuration3 = 120;
const flightDuration4 = 80;
const flightDuration5 = 50;
const flightDuration6 = 75;
const flightDuration7 = 75;
const movieDataSet1 = [1, 5, 9, 10, 11, 20, 25, 35, 40, 50, 59];
const movieDataSet2 = [1, 5, 9, 10, 11, 20, 25, 35, 40, 50, 59];
const movieDataSet3 = [80, 5, 9, 10, 11, 20, 25, 35, 40, 50, 70];
const movieDataSet4 = [1, 5, 9, 10, 11, 20, 25, 35, 40, 50, 59];
const movieDataSet5 = [1, 5, 8, 10, 11, 12, 15, 19, 30, 40, 49, 59];
const movieDataSet6 = [1, 5, 9, 10, 11, 20, 25, 35, 40, 50, 59];
const movieDataSet7 = [1, 5, 9, 10, 11, 20, 25, 35, 40, 50, 59];

console.log(onFlightMovieRecommendation(flightDuration1, movieDataSet1)); // [ -1, -1 ]
console.log(onFlightMovieRecommendation(flightDuration2, movieDataSet1)); // [1,59]
// possible choices -> [ [1,59], [10,50], [20,40], [25,35] ]
//                           ^ first one with the longest running time should be returned as the final result

console.log(onFlightMovieRecommendation(flightDuration3, movieDataSet3)); // [ 10, 80 ]
// here the movie data set has to be provided in sorted order otherwise we'll sort
// the data. this will have related consequences on performance since, sorting will
// result in O(n logn) using merge sort
// if not the result will be in O(n) - linear

console.log(onFlightMovieRecommendation(flightDuration4, movieDataSet4)); // [ -1, -1 ]
console.log(onFlightMovieRecommendation(flightDuration5, movieDataSet5));
// console.log(onFlightMovieRecommendation(flightDuration6, movieDataSet6));
// console.log(onFlightMovieRecommendation(flightDuration7, movieDataSet7));
