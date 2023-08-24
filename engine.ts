// Add your code here
function updateCube() {
    //console.log(level)
    size = 25
    centerX = scene.screenWidth() / 2
    centerY = scene.screenHeight() / 2
    // 3
    let vertices = [
        { x: -100, y: -20, z: -size },//0
        { x: -75, y: -25, z: -size + 10 },//1
        { x: -30, y: -36, z: -size },//2
        { x: 20, y: -26, z: -size + 6 },
        { x: 70, y: -32, z: -size },
        { x: -120, y: 20, z: -size },
    ]
    let triangles = [
        { indices: [0, 0, 0], color: 0 }
    ]
    function add_tile_at(col: number, row: number, col1: number, col2: number, z: number) {
        //let tileSize = 30; 
        let tileVertices = [
            { x: tileSize * col, y: tileSize * row, z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: tileSize * col, y: tileSize * row, z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: tileSize * z },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: tileSize * z },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);
        vertices.push(tileVertices[4]);
        vertices.push(tileVertices[5]);
        vertices.push(tileVertices[6]);
        vertices.push(tileVertices[7]);
        let num = vertices.length;
        //triangles.push({ indices: [num-1, num - 2, num - 3], color: 2 });
        //triangles.push({ indices: [num-1, num - 4, num - 3], color: 3 });
        triangles.push({ indices: [num - 1, num - 4, num - 5], color: col1 });
        triangles.push({ indices: [num - 4, num - 8, num - 5], color: col2 });
        triangles.push({ indices: [num - 4, num - 8, num - 3], color: col1 });
        triangles.push({ indices: [num - 8, num - 3, num - 7], color: col2 });
        // triangles.push({ indices: [num - 3, num - 6, num - 7], color: col1 });
        //triangles.push({ indices: [num - 3, num - 2, num - 6], color: col2 });
        //triangles.push({ indices: [num - 1, num - 5, num - 6], color: col1 });
        // triangles.push({ indices: [num - 1, num - 2, num - 6], color: col2 });
        triangles.push({ indices: [num - 8, num - 5, num - 6], color: col2 });
        triangles.push({ indices: [num - 8, num - 7, num - 6], color: col1 });


    }
    function add_tile2_at(col: number, row: number, col1: number, col2: number, z: number) {
        // let tileSize = 30; 
        let tileVertices = [
            { x: tileSize * col, y: tileSize * row, z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: tileSize * col, y: tileSize * row, z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: tileSize * z },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: tileSize * z },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);
        vertices.push(tileVertices[4]);
        vertices.push(tileVertices[5]);
        vertices.push(tileVertices[6]);
        vertices.push(tileVertices[7]);
        let num = vertices.length;
        //triangles.push({ indices: [num-1, num - 2, num - 3], color: 2 });
        //triangles.push({ indices: [num-1, num - 4, num - 3], color: 3 });
        triangles.push({ indices: [num - 1, num - 4, num - 5], color: col1 });
        triangles.push({ indices: [num - 4, num - 8, num - 5], color: col2 });
        //triangles.push({ indices: [num - 4, num - 8, num - 3], color: col1 });
        //triangles.push({ indices: [num - 8, num - 3, num - 7], color: col2 });
        // triangles.push({ indices: [num - 3, num - 6, num - 7], color: col1 });
        //triangles.push({ indices: [num - 3, num - 2, num - 6], color: col2 });
        //triangles.push({ indices: [num - 1, num - 5, num - 6], color: col1 });
        // triangles.push({ indices: [num - 1, num - 2, num - 6], color: col2 });
        triangles.push({ indices: [num - 8, num - 5, num - 6], color: col2 });
        triangles.push({ indices: [num - 8, num - 7, num - 6], color: col1 });


    }
    function add_tile3_at(col: number, row: number, col1: number, col2: number, z: number) {
        //let tileSize = 30; 
        let tileVertices = [
            { x: tileSize * col, y: tileSize * row, z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: tileSize * col, y: tileSize * row, z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: tileSize * z },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: tileSize * z },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);
        vertices.push(tileVertices[4]);
        vertices.push(tileVertices[5]);
        vertices.push(tileVertices[6]);
        vertices.push(tileVertices[7])


        let num = vertices.length;
        //triangles.push({ indices: [num-1, num - 2, num - 3], color: 2 });
        //triangles.push({ indices: [num-1, num - 4, num - 3], color: 3 });
        //triangles.push({ indices: [num - 1, num - 4, num - 5], color: col1 });
        //triangles.push({ indices: [num - 4, num - 8, num - 5], color: col2 });
        triangles.push({ indices: [num - 4, num - 8, num - 3], color: col1 });
        triangles.push({ indices: [num - 8, num - 3, num - 7], color: col2 });
        // triangles.push({ indices: [num - 3, num - 6, num - 7], color: col1 });
        //triangles.push({ indices: [num - 3, num - 2, num - 6], color: col2 });
        //triangles.push({ indices: [num - 1, num - 5, num - 6], color: col1 });
        // triangles.push({ indices: [num - 1, num - 2, num - 6], color: col2 });
        //triangles.push({ indices: [num - 8, num - 5, num - 6], color: col2 });
        //triangles.push({ indices: [num - 8, num - 7, num - 6], color: col1 });


    }
    function add_bgwall_at(col: number, row: number, col1: number, col2: number, z: number) {
        // let tileSize = 30; // Add this line to define tileSize
        let tileVertices = [
            { x: tileSize * col, y: tileSize * row, z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: tileSize * col, y: tileSize * row, z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: tileSize * z },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: tileSize * z },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);
        vertices.push(tileVertices[4]);
        vertices.push(tileVertices[5]);
        vertices.push(tileVertices[6]);
        vertices.push(tileVertices[7]); // Use spread operator to add tileVertices to vertices

        // Update the indices of the triangle to form a quad
        let num = vertices.length;
        //triangles.push({ indices: [num-1, num - 2, num - 3], color: 2 });
        //triangles.push({ indices: [num-1, num - 4, num - 3], color: 3 });
        //triangles.push({ indices: [num - 1, num - 4, num - 5], color: col1 });
        //triangles.push({ indices: [num - 4, num - 8, num - 5], color: col2 });
        //triangles.push({ indices: [num - 4, num - 8, num - 3], color: col1 });
        //triangles.push({ indices: [num - 8, num - 3, num - 7], color: col2 });
        // triangles.push({ indices: [num - 3, num - 6, num - 7], color: col1 });
        //triangles.push({ indices: [num - 3, num - 2, num - 6], color: col2 });
        //triangles.push({ indices: [num - 1, num - 5, num - 6], color: col1 });
        // triangles.push({ indices: [num - 1, num - 2, num - 6], color: col2 });
        triangles.push({ indices: [num - 8, num - 5, num - 6], color: col2 });
        triangles.push({ indices: [num - 8, num - 7, num - 6], color: col1 });


    }
    function add_leftwall_at(col: number, row: number, col1: number, col2: number, z: number) {
        // let tileSize = 30; // Add this line to define tileSize
        let tileVertices = [
            { x: tileSize * col, y: tileSize * row, z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: tileSize * col, y: tileSize * row, z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: tileSize * z },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: tileSize * z },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);
        vertices.push(tileVertices[4]);
        vertices.push(tileVertices[5]);
        vertices.push(tileVertices[6]);
        vertices.push(tileVertices[7]); // Use spread operator to add tileVertices to vertices

        // Update the indices of the triangle to form a quad
        let num = vertices.length;
        //triangles.push({ indices: [num-1, num - 2, num - 3], color: 2 });
        //triangles.push({ indices: [num-1, num - 4, num - 3], color: 3 });
        triangles.push({ indices: [num - 1, num - 4, num - 5], color: col1 });
        triangles.push({ indices: [num - 4, num - 8, num - 5], color: col2 });
        //triangles.push({ indices: [num - 4, num - 8, num - 3], color: col1 });
        //triangles.push({ indices: [num - 8, num - 3, num - 7], color: col2 });
        triangles.push({ indices: [num - 3, num - 6, num - 7], color: col1 });
        triangles.push({ indices: [num - 3, num - 2, num - 6], color: col2 });
        //triangles.push({ indices: [num - 1, num - 5, num - 6], color: col1 });
        //triangles.push({ indices: [num - 1, num - 2, num - 6], color: col2 });
        triangles.push({ indices: [num - 8, num - 5, num - 6], color: col2 });
        triangles.push({ indices: [num - 8, num - 7, num - 6], color: col1 });


    }
    function add_justsides_at(col: number, row: number, col1: number, col2: number, z: number) {
        // let tileSize = 30; // Add this line to define tileSize
        let tileVertices = [
            { x: tileSize * col, y: tileSize * row, z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            { x: tileSize * col, y: tileSize * row, z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row), z: tileSize * z },
            { x: (tileSize * col) + tileSize, y: (tileSize * row) + tileSize, z: tileSize * z },
            { x: (tileSize * col), y: (tileSize * row) + tileSize, z: tileSize * z },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);
        vertices.push(tileVertices[4]);
        vertices.push(tileVertices[5]);
        vertices.push(tileVertices[6]);
        vertices.push(tileVertices[7]); // Use spread operator to add tileVertices to vertices

        // Update the indices of the triangle to form a quad
        let num = vertices.length;
        //triangles.push({ indices: [num-1, num - 2, num - 3], color: 2 });
        //triangles.push({ indices: [num-1, num - 4, num - 3], color: 3 });
        triangles.push({ indices: [num - 1, num - 4, num - 5], color: col1 });
        triangles.push({ indices: [num - 4, num - 8, num - 5], color: col2 });
        //triangles.push({ indices: [num - 4, num - 8, num - 3], color: col1 });
        //triangles.push({ indices: [num - 8, num - 3, num - 7], color: col2 });
        triangles.push({ indices: [num - 3, num - 6, num - 7], color: col1 });
        triangles.push({ indices: [num - 3, num - 2, num - 6], color: col2 });
        //triangles.push({ indices: [num - 1, num - 5, num - 6], color: col1 });
        //triangles.push({ indices: [num - 1, num - 2, num - 6], color: col2 });
        //triangles.push({ indices: [num - 8, num - 5, num - 6], color: col2 });
        //triangles.push({ indices: [num - 8, num - 7, num - 6], color: col1 });


    }
    function add_window_at(col: number, row: number, col1: number, col2: number, z: number) {
        //let tileSize = 30;
        let change = 8
        let tileVertices = [
            { x: tileSize * col + change, y: tileSize * row + change, z: (tileSize * z) - tileSize - 2 },
            { x: (tileSize * col) + tileSize - change, y: (tileSize * row) + change, z: (tileSize * z) - tileSize - 2 },
            { x: (tileSize * col) + tileSize - change, y: (tileSize * row) + tileSize - change, z: (tileSize * z) - tileSize - 2 },
            { x: (tileSize * col) + change, y: (tileSize * row) + tileSize - change, z: (tileSize * z) - tileSize - 2 },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);


        let num = vertices.length;
        triangles.push({ indices: [num - 4, num - 1, num - 2], color: col2 });
        triangles.push({ indices: [num - 4, num - 3, num - 2], color: col1 });


    }
    function add_window2_at(col: number, row: number, col1: number, col2: number, z: number) {
        //let tileSize = 30;
        let change = -4
        let tileVertices = [
            { x: tileSize * col + change, y: tileSize * row + change, z: (tileSize * z) - tileSize - 3 },
            { x: (tileSize * col) + tileSize - change, y: (tileSize * row) + change, z: (tileSize * z) - tileSize - 3 },
            { x: (tileSize * col) + tileSize - change, y: (tileSize * row) + tileSize - change, z: (tileSize * z) - tileSize - 3 },
            { x: (tileSize * col) + change, y: (tileSize * row) + tileSize - change, z: (tileSize * z) - tileSize - 3 },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);


        let num = vertices.length;
        triangles.push({ indices: [num - 4, num - 1, num - 2], color: col2 });
        triangles.push({ indices: [num - 4, num - 3, num - 2], color: col1 });


    }
    function add_door_at(col: number, row: number, col1: number, col2: number, z: number) {
        //let tileSize = 30;
        let tileVertices = [
            { x: tileSize * col + 8, y: tileSize * row + 4, z: (tileSize * z) - tileSize - 4 },
            { x: (tileSize * col) + tileSize - 8, y: (tileSize * row) + 4, z: (tileSize * z) - tileSize - 4 },
            { x: (tileSize * col) + tileSize - 8, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize - 4 },
            { x: (tileSize * col) + 8, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize - 4 },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);


        let num = vertices.length;
        triangles.push({ indices: [num - 4, num - 1, num - 2], color: col2 });
        triangles.push({ indices: [num - 4, num - 3, num - 2], color: col1 });
        doorVertice1 = num - 3
        doorVertice2 = num - 2

    }
    function add_doorhole_at(col: number, row: number, col1: number, col2: number, z: number) {
        //let tileSize = 30;
        let tileVertices = [
            { x: tileSize * col + 9, y: tileSize * row + 5, z: (tileSize * z) - tileSize - 2 },
            { x: (tileSize * col) + tileSize - 9, y: (tileSize * row) + 5, z: (tileSize * z) - tileSize - 2 },
            { x: (tileSize * col) + tileSize - 9, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize - 2 },
            { x: (tileSize * col) + 9, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize - 2 },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);


        let num = vertices.length;
        triangles.push({ indices: [num - 4, num - 1, num - 2], color: col2 });
        triangles.push({ indices: [num - 4, num - 3, num - 2], color: col1 });

    }
    function add_doorhole2_at(col: number, row: number, col1: number, col2: number, z: number) {
        //let tileSize = 30;
        let tileVertices = [
            //{ x: tileSize * col, y: tileSize * row, z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize-2, y: (tileSize * row), z: (tileSize * z) - tileSize },
            { x: (tileSize * col) + tileSize-2, y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            //{ x: (tileSize * col), y: (tileSize * row) + tileSize, z: (tileSize * z) - tileSize },
            //{ x: tileSize * col, y: tileSize * row, z: tileSize * z },
            { x: (tileSize * col) + tileSize-2, y: (tileSize * row), z: tileSize * z-18 },
            { x: (tileSize * col) + tileSize-2, y: (tileSize * row) + tileSize, z: tileSize * z-18 },
            //{ x: (tileSize * col), y: (tileSize * row) + tileSize, z: tileSize * z },
        ];

        vertices.push(tileVertices[0]);
        vertices.push(tileVertices[1]);
        vertices.push(tileVertices[2]);
        vertices.push(tileVertices[3]);


        let num = vertices.length;
        triangles.push({ indices: [num - 3, num - 1, num - 2], color: col2 });
        triangles.push({ indices: [num - 4, num - 3, num - 2], color: col1 });

    }
    
    if (level === 1) {
        add_tile_at(-5, 1, 7, 9, 0)

        for (let i = -4; i < 3; i++) {
            //add_tile_at(i, 1,2,3,-1)
            add_tile3_at(i, 1, 7, 9, 0)

        }
        for (let i = -5; i < 5; i++) {
            add_tile_at(i, 1, 2, 3, -1)
            //add_tile_at(i, 1, 7, 9, -0)

        }
        add_tile2_at(3, 0, 5, 6, 0)
        add_tile2_at(4, 0, 5, 6, 0)
        add_tile_at(3, -1, 5, 6, 0)
        add_tile_at(4, -1, 5, 6, 0)
        add_window_at(4, -1, 12, 12, 0)
        add_window_at(3, -1, 12, 12, 0)
        add_window_at(4, 0, 12, 12, 0)
        add_door_at(3, 0, 7, 13, 0)
        add_doorhole_at(3, 0, 4, 4, 0)

        vertices[doorVertice1] = { x: vertices[doorVertice1].x + doorChangeX, y: vertices[doorVertice1].y, z: vertices[doorVertice1].z + doorChangeZ };
        vertices[doorVertice2] = { x: vertices[doorVertice2].x + doorChangeX, y: vertices[doorVertice2].y, z: vertices[doorVertice2].z + doorChangeZ };
    }
    if (level === 2) {

        for (let i = -4; i < 0; i++) {

            add_tile3_at(i, 1, 14, 15, 0)
            add_tile3_at(i, 1, 14, 15, -1)
            add_tile3_at(i, 1, 14, 15, -2)
            add_bgwall_at(i, 0, 1, 2, 1)
            add_bgwall_at(i, -1, 1, 2, 1)
            add_bgwall_at(i, -2, 1, 2, 1)

        }

        for (let i = 0; i < 3; i++) {
            add_leftwall_at(-5, -i, 1, 2, -2)
            add_justsides_at(-5, -i, 1, 2, -1)
            add_justsides_at(-5, -i, 1, 2, 0)
            add_leftwall_at(0, -i, 1, 2, -2)
            add_justsides_at(0, -i, 1, 2, -1)
            add_justsides_at(0, -i, 1, 2, 0)
        }
        add_doorhole_at(-4, 0,4, 4, 1)
        add_doorhole2_at(-1, 0, 4, 4, -1)
    }
    if (level === 3) {

        tiles.setCurrentTilemap(tilemap`level2`)
        tileSize = 16
        for (let value of tiles.getTilesByType(img`
    f . . . . . . . . . . . . . . f
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)) {
            add_tile3_at((value.col), (value.row), 1, 2, 0)
            //console.log(value.col)
            camx = scene.cameraProperty(CameraProperty.X)
            camy = scene.cameraProperty(CameraProperty.Y)
        }

        for (let value2 of tiles.getTilesByType(img`
        c . . . . . . . . . . . . . . c
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)) {
            tileSize = 16

            add_window2_at((value2.col), (value2.row)
                , 12, 12, 1)
            tiles.setTileAt(tiles.getTileLocation(value2.col, value2.row), img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `)
                
        }
        for (let value2 of tiles.getTilesByType(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . 5 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `)) {
            tileSize = 16

            add_tile3_at((value2.col), (value2.row), 7, 13, 0)

            tiles.setTileAt(tiles.getTileLocation(value2.col, value2.row), img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `)
        }
        tileSize = 32
        add_doorhole_at(3,1,4,4,1)
    }



    let rotatedVertices = vertices.map(vertex => {
        let x = vertex.x;
        let y = vertex.y;
        let z = vertex.z;
        x -= camx
        y -= camy
        z -= camz

        // Rotate around the X-axis
        let cosX = Math.cos(angleX);
        let sinX = Math.sin(angleX);
        let rotatedY = y * cosX - z * sinX;
        let rotatedZ = y * sinX + z * cosX;

        // Rotate around the Y-axis
        let cosY = Math.cos(angleY);
        let sinY = Math.sin(angleY);
        let rotatedX = x * cosY + rotatedZ * sinY;
        let rotatedZ2 = -x * sinY + rotatedZ * cosY;

        // Rotate around the Z-axis
        let cosZ = Math.cos(angleZ);
        let sinZ = Math.sin(angleZ);
        let rotatedX2 = rotatedX * cosZ - rotatedY * sinZ;
        let rotatedY2 = rotatedX * sinZ + rotatedY * cosZ;

        // Project onto 2D
        let scaleFactor = 200 / (200 + rotatedZ2);
        let projectedX = rotatedX2 * scaleFactor;
        let projectedY = rotatedY2 * scaleFactor;

        // Translate to screen coordinates
        let screenX = centerX + projectedX;
        let screenY = centerY + projectedY;

        return { x: screenX, y: screenY, z: rotatedZ2 };
    });
    triangles.sort((b, a) => {
        let zA = (rotatedVertices[a.indices[0]].z + rotatedVertices[a.indices[1]].z + rotatedVertices[a.indices[2]].z) / 3;
        let zB = (rotatedVertices[b.indices[0]].z + rotatedVertices[b.indices[1]].z + rotatedVertices[b.indices[2]].z) / 3;
        return zA - zB;
    });
    trianglecount = 0
    scene.backgroundImage().fill(8)
    if (level === 3) {
        scene.backgroundImage().fill(3)
    }
    if (level === 2) {
        scene.backgroundImage().fill(3)
    }
    // Draw the sorted triangles
    // Draw the sorted triangles
    for (let i = 0; i < triangles.length; i++) {
        let triangle = triangles[i];
        let indices = triangle.indices;
        let color = triangle.color;
        if ((rotatedVertices[indices[0]].x > 0 && rotatedVertices[indices[0]].x < 160) || (rotatedVertices[indices[1]].x > 0 && rotatedVertices[indices[1]].x < 160) || (rotatedVertices[indices[2]].x > 0 && rotatedVertices[indices[2]].x < 160)) {
            if ((rotatedVertices[indices[0]].y > 0 && rotatedVertices[indices[0]].y < 120) || (rotatedVertices[indices[1]].y > 0 && rotatedVertices[indices[1]].y < 120) || (rotatedVertices[indices[2]].y > 0 && rotatedVertices[indices[2]].y < 120)) {

                trianglecount++
                bg.fillTriangle(rotatedVertices[indices[0]].x, rotatedVertices[indices[0]].y, rotatedVertices[indices[1]].x, rotatedVertices[indices[1]].y, rotatedVertices[indices[2]].x, rotatedVertices[indices[2]].y, color);
            }
        }
        //bg.fillTriangle(rotatedVertices[indices[0]].x, rotatedVertices[indices[0]].y, rotatedVertices[indices[1]].x, rotatedVertices[indices[1]].y, rotatedVertices[indices[2]].x, rotatedVertices[indices[2]].y, color);
    }
    cloud1.setPosition(rotatedVertices[0].x, rotatedVertices[0].y)
    cloud2.setPosition(rotatedVertices[1].x, rotatedVertices[1].y)
    cloud3.setPosition(rotatedVertices[2].x, rotatedVertices[2].y)
    cloud4.setPosition(rotatedVertices[3].x, rotatedVertices[3].y)
    cloud5.setPosition(rotatedVertices[4].x, rotatedVertices[4].y)
    sign.setPosition(rotatedVertices[5].x, rotatedVertices[5].y)
    if (level === 2) {

        mona5.setPosition(rotatedVertices[144].x, rotatedVertices[144].y)
        mona6.setPosition(rotatedVertices[90].x, rotatedVertices[90].y)
    }

    //console.log(trianglecount)
    cloud1.z = -rotatedVertices[0].z
    cloud2.z = -rotatedVertices[1].z
    cloud3.z = -rotatedVertices[2].z
    cloud4.z = -rotatedVertices[3].z
    cloud5.z = -rotatedVertices[4].z
    //angleY += 0.001
}