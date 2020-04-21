import React from 'react';
import { render } from '@testing-library/react';
import profilePageReducer, {addPostActionCreator} from "./ProfilePageReducer.js";

it('new post should be added', () => {
	let action = addPostActionCreator("Oleh Perehuda made this post");
	let state = {
    postsData: [
        {id: 1, message: "hello, i am new in this messenger"},
        {id: 2, message: "I am glad"}
    ]
};
	let newState = profilePageReducer(state, action); 

	expect(newState.postsData.length).toBe(3);
});
