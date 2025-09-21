import ComponentC from "./ComponentC"
export default function ComponentB() {
    return (
        <div className="box">
            <h2>ComponentB</h2>
            <ComponentC />
        </div>
    )
}