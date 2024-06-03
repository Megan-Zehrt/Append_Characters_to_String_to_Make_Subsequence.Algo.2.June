// Append Characters to String to Make Subsequence

// You are given two strings s and t consisting of only lowercase english letters.

// Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.

// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters




/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    
    let j = 0

    for(let i = 0; i < s.length; i++){
        if(s[i] == t[j]){
            j++
        }
    }

    let final = t.length - j

    return final
};