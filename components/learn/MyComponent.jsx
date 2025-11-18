import "./style.css"
const MyComponent = () => {
    // const hoidanit = "abc";
    // const hoidanit = 5;

    // const hoidanit = true;

    // const hoidanit = undefined;

    // const hoidanit = null;
    // Có thể in đc 1 biến trong html thông qua {} nhưng chỉ in đc kiểu string , number còn 3 kiểu còn lại thì chỉ dùng trong câu 
    // lệnh điều kiện chứ ko ai dùng để in ra và JSX nó định nghĩa như vậy
    // const hoidanit = [1,2,3];
    const hoidanit = {
        name: "Khanh"

    };


    return (
        <>
            <div>{JSON.stringify(hoidanit)}</div>
            <div>{console.log("VIết js trong html")}</div>
            <div className="child" style={{ borderRadius: "8px" }}>Thẻ div</div>
            <div>Thẻ div 1</div>

        </>
    );
}
export default MyComponent;