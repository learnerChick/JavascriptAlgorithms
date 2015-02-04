define(function(){
    function Trie(){
        this.head = {};
        this.count = 0;
    }


    Trie.prototype.add = function(word){
        if(typeof word === "undefined" || word === ""){
            return null;
        }

        var current = this.head;

        for(var i = 0; i < word.length; i++){
            var ch = word[i];
            if(!(ch in current)){
                current[ch] = {};
            }
            //we assign the current node to the found node, so that we can check the next character in its children
            current = current[ch];
        }
        //this sets the end of the string
        current.$ = 1;
        this.count++;
    };

    Trie.prototype.remove = function(word){
        if(this.isEmpty()){
            return null;
        }
        else if(typeof word === "undefined" || word === ""){
            return null;
        }

        canRemove(word, -1, this.head);
    };

    Trie.prototype.find = function(word){
        var current = this.head;
        //basically go through the string to continue finding a match
        for(var i = 0; i < word.length; i++){
            var ch = word[i];
            if(ch in current){
                current = current[ch];
            }
            else{
                return false;
            }
        }

        //here, when it gets out of the loop, we check if the last character is a $ (end marker), if so, we found a match
        if("$" in current){
            return true;
        }
        return false;
    };

    Trie.prototype.getWordsWithPrefix = function(prefix){
        var current = this.head;
        var words = [];
        for(var i = 0; i < prefix.length; i++){
            var ch = prefix[i];
            if(ch in current){
                current = current[ch];
            }
            else{
                return words;
            }
        }

        //the prefix tree ends here, all subsequent characters in this tree are the prefixes
        words = getWords(current, prefix, []);
        return words;
    };

    Trie.prototype.isEmpty = function(){
        return this.count === 0;
    };

    Trie.prototype.getTree = function(){
        return this.head;
    };

    function getWords(node, word, store){
        for(ch in node){
            if(ch === "$"){
                store.push(word);
            }
            else{
                getWords(node[ch], word + ch, store);
            }
        }
        return store;
    }

    function canRemove(word, index, node){
        /* since this is a recursive function, when we return true if there
            aren't any children, it will delete each character node in entirety
            in the else loop.  In the first if loop, it will delete the $ character
            and progressively delete the characters.
        */
        if(index === word.length - 1){
            //last letter
            this.count--;
            return (delete node.$ && noChildren(node));
        }
        else{
            var ch = word[index+1];
            if(canRemove(word, index+1, node[ch])){
                return (delete node[ch]) && noChildren(node);
            }
        }
        return false;
    }

    function noChildren(node){
        return Object.keys(node).length === 0;
    }

    return Trie;
});
