import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    const [block, setBlock] = useState([]);
    // Refer to Hint 2 for more help!

    const newPost = (color) => {
        setBlock(block => [<Block color={color}></Block>, block]);
    }


    /* Use the map() function to render multiple Blocks! */
    const posts = block.map(
        (block) => <Block color={block}></Block>);

    return (
        <div>
            <Menu newPost={newPost}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;