define(function(){
  function getHeight(node){
    if(node === null){
      return -1;
    }

    var leftHeight = getHeight(node.left);
    var rightHeight = getHeight(node.right);
    var height = Math.max(leftHeight, rightHeight) + 1;

    return height;
  }

  return getHeight;
});
