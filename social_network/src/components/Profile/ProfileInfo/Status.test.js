import React from "react";
import {create} from "react-test-renderer";
import Status from "./Status.js";

describe("status component", () => {
	test("status from props should be in the state", () => {
		const component = create(<Status status="hello everyone"/>);
		const instance = component.getInstance(); 
		expect(instance.state.status).toBe("hello everyone");
	});
		test("span with status sholud be displayed", () => {
		const component = create(<Status status="hello everyone"/>);
		const instance = component.root; 
		const span = instance.findByType("span");
		expect(span).not.toBeNull();
	});	
		test("span with status sholud be displayed", () => {
		const component = create(<Status status="hello everyone"/>);
		const instance = component.root; 
		expect( () => {
			const input = instance.findByType("input");
		}).toThrow();
	});	
	test("span contains correct status", () => {
		const component = create(<Status status="hello everyone"/>);
		const instance = component.root; 
		const span = instance.findByType("span");
		expect(span.children[0]).toBe("hello everyone");
	});
	test("input should be display in editMode instead span", () => {
		const component = create(<Status status="hello everyone"/>);
		const instance = component.root; 
		const span = instance.findByType("span");
		span.props.onDoubleClick();
		const input = instance.findByType("input");
		expect(input.props.value).toBe("hello everyone");
	});
	test("callback sould be update", () => {
		const mockCallback = jest.fn();
		const component = create(<Status status="hello everyone"
			updateStatus={mockCallback}/>);
		const instance = component.getInstance();
		instance.deActivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	});		
});