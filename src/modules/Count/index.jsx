import React, { useCallback, useState, useEffect } from 'react';

class Child extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.flag !== this.props.flag;
  }

  render() {
    console.log('Child render');
    return <div>Child Count: {this.props.count}</div>;
  }
}

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [selfCount, setSelfCount] = useState(100);

  const memoizedCallback = useCallback(() => {
    console.log('count change', count, selfCount);
  }, [count]);

  function testC(){
      var testEffect =0;

      function inner(){
          console.log('getInner')
          testEffect ++
          console.log('innerEffect: ',testEffect);
          
          return testEffect
      }

      return inner
  }

  const closureT = testC();

  useEffect(() => {
      console.log('T:',closureT())
      console.log('effect:',selfCount);
  }, [count])
  
  const obj = { add: 1}
  console.log('rerender');
  console.log('addC',addC);
  
  const testCLick = (obj) => {
    obj.add = 2 ;
    console.log('obj',obj.add);
    
  }
  console.log('obj2:',obj.add);
//   testCLick(obj)
  
  return (
    <div>
      <Child count={count} flag={memoizedCallback} />
      {/* <p>self Count：{selfCount}</p> */}
      <p onClick={() => setCount(count + 1)}>child count add</p>
      <p onClick={() => testCLick(obj)}>self count add</p>
      <p onClick={() => memoizedCallback()}>callback click</p>
    </div>
  )
}

var addC = 0;

export default UseCallBack