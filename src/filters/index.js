const filterSchema = {
  name: String
  subs: [filterSchema]
  postList: [posts]
}

function andFilters = (filters) => {
  //1. flatten filters and subs (check against circular filter + subs), remove duplicates -- perhaps it is halt on duplicate
  //    -Note: Each top level filter should have a post array. Then the post arrays are ANDed. shortestList.filter((postId) => if(allOtherLists.contain(postId))
  //2. flatten postLists, remove duplicates
  //3. AND posts
  //4. sort postLists by date
  //5. retrieve X most recent
  //6. save list and cursor for paged retrieval
}

/*
 * To be used with AND
 */


function orFilters = (filters) => {
  var masterList = []
  var masterPosts = []

  filters.map((filter) => recursiveFilterFlatten(masterList, filter))


  //1. flatten filters and subs
  //2. flatten postLists, remove duplicates
  //3. concat posts, remove duplicates
  //4. sort postLists by date
  //5. retrieve X most recent
  //6. save list and cursor for paged retrieval
}

/*
 * To be used with OR
 */
function recursiveFilterFlatten = (masterList, filter) => {
  if(masterList.contains(filter.name)){
    return
  } else {
    masterList.push(filter.name)
    masterPosts.push(filter.postList)

    if(0 < filter.subs.length){
      filter.subs.map((sub) => {
        recursiveFilterFlatten(masterList, sub)
      })
    }
  }
}
