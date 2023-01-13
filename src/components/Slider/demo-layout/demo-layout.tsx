import './style.css'

const DemoLayout = () => (
  <div className="demo-layout">
    <div className="header">
      <h1>Demo Layout Header</h1>
    </div>    
    <div className="left-col">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
      </div>
      <div className="main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut tellus
          a tortor vestibulum pulvinar. Nullam luctus ante id metus ultricies,
          porttitor aliquam enim gravida. Fusce lorem ligula, porta in ipsum
          blandit, tempus egestas nunc. Fusce sollicitudin justo eu vestibulum
          commodo. Maecenas gravida rutrum tellus a scelerisque. Donec venenatis
          magna nec augue malesuada facilisis. Cras gravida eros purus, non
          dignissim est molestie ut. Nam sed erat ex. Vestibulum a pulvinar
          justo.
        </p>
      </div>
      <div className="right-col"></div>
    <div className="footer">
      <h3>Footer section</h3>
    </div>
  </div>
);

export default DemoLayout;
