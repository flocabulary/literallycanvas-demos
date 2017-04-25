const React = require('react');
const ReactDOM = require('react-dom');
const LC = require('literallycanvas');


const MyApp = React.createClass({
    render: function() {
        return (
            <LC.LiterallyCanvasReactComponent
                imageURLPrefix="/build/lc-assets/img"
                tools={
                    [
                      LC.tools.Pencil,
                      LC.tools.Eraser,
                      LC.tools.Line,
                      LC.tools.Rectangle,
                      LC.tools.Text
                    ]
                }
                zoomMax={1}
                zoomMin={1}

            />
        );
    }
});


ReactDOM.render(<MyApp />, document.getElementById('main'));
