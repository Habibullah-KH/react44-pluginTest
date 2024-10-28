import { LineChart, Line, XAxis, YAxis } from 'recharts';


const Chart = () => {

    const mathMarkdata = [
        { "id": 1, "name": "Alice", "mathMarks": 78, "physicsMarks": 82, "chemistryMarks": 75 },
        { "id": 2, "name": "Bob", "mathMarks": 85, "physicsMarks": 80, "chemistryMarks": 88 },
        { "id": 3, "name": "Charlie", "mathMarks": 90, "physicsMarks": 85, "chemistryMarks": 84 },
        { "id": 4, "name": "David", "mathMarks": 65, "physicsMarks": 70, "chemistryMarks": 68 },
        { "id": 5, "name": "Eva", "mathMarks": 88, "physicsMarks": 92, "chemistryMarks": 86 },
        { "id": 6, "name": "Frank", "mathMarks": 72, "physicsMarks": 78, "chemistryMarks": 70 },
        { "id": 7, "name": "Grace", "mathMarks": 95, "physicsMarks": 94, "chemistryMarks": 89 },
        { "id": 8, "name": "Hannah", "mathMarks": 80, "physicsMarks": 76, "chemistryMarks": 78 },
        { "id": 9, "name": "Ivy", "mathMarks": 60, "physicsMarks": 65, "chemistryMarks": 62 },
        { "id": 10, "name": "Jack", "mathMarks": 92, "physicsMarks": 89, "chemistryMarks": 91 }
      ]
      ;
      

    return (
        <div>
        <LineChart width={500} height={400} data={mathMarkdata}>
            <XAxis dataKey="name"/>
            <YAxis></YAxis>
            <Line dataKey="mathMarks" stroke="#8884d8"></Line>
            <Line dataKey="physicsMarks" stroke="red"></Line>
            <Line dataKey="chemistryMarks" stroke="yellow"></Line>
        </LineChart>
        </div>
    );
};

export default Chart;