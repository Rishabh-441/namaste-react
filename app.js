const parent = React.createElement(
    'div', 
    {id: "parent"}, 
    [
        React.createElement(
            'div',
            {id: 'child1'},
            [
                React.createElement('h1',{},'This is an h1 tag in child div!!'),
                React.createElement('h2',{},'This is an h2 tag in child div!!')
            ]
        ),
        React.createElement(
            'div',
            {id: 'child2'},
            [
                React.createElement('h1',{},'This is an h1 tag in child div!!'),
                React.createElement('h2',{},'This is an h2 tag in child div!!')
            ]
        )
    ]
);
// ReactElement(Object) => HTML(Browser Understands)


const heading = React.createElement('h1', {id: "heading1"}, "Hello world from React!!");
// {} -> this object is used to give attributes to our tag
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent);
// heading is a react element (object), not an h1 tag

root.render(parent);

//render method converts the object into h1 tag and puts it up in the HTML.