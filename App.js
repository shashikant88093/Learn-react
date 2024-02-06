const heading = React.createElement('div', { id: 'parent' }, 
[
    React.createElement('div', { id: 'child' }, 
[
    React.createElement('h1', {}, 'Hello, World!'),
    React.createElement('h2', {}, 'React is awesome')
]),
React.createElement('div', { id: 'child2' }, 
[
    React.createElement('h1', {}, 'Hello, World!'),
    React.createElement('h2', {}, 'React is awesome')
])
]

);
const root = document.getElementById('root');
ReactDOM.render(heading, root);

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(heading);
