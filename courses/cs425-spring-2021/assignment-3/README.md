### CS425 - Computer Graphics I (Spring 2021)

### Assignment 3: Ray tracing
The goal of this assignment is to implement a simple ray tracer using JavaScript. You will develop an application to ray trace a scene described in an external JSON (uploaded by the user through a configuration panel). The JSON file contains camera attributes (position, fov, direction), objects in the scene (spheres or planes), as well as the position of light sources.

There are four tasks, and you are free to use the skeleton code provided. The code has some comments detailing what needs to be implemented in each function; it also contains functions to handle file upload, and user interactions through the control panel. There are three main classes:
- `Ray`: contains the origin and direction of each ray.
- `Intersection`: contains distance to an intersection, and intersection point.
- `Hit`: contains an intersection and a reference to the object that the ray intersected with.

File `utils.js` contains some useful functions to perform dot products, multiplication of a vector by a scalar, addition, subtraction, length, as well as a function to reflect a ray considering a surface normal.

Here is an example of assignment 3:

![Assignment 3 example](raytracer.png)

GitHub link: https://github.com/uic-cs425/spring-2021-assignment-3

### Tasks
The following tasks ask you to implement a ray tracer considering different light components. Your application should enable or disable each light component according to the checkboxes in the user interface (the state of each checkbox is stored in the `ambientToggle`, `diffuseToggle`, `specularToggle` and `reflectionToggle` variables).

This repository also contains a scene description file (scene.json), but you are encouraged to create your own.

#### Task 1
You should implement a basic ray tracer shading points considering only the ambient component. In the skeleton code, the `render` function creates `width x height` rays, one for each pixel in the canvas. Function `trace` then traces the ray through the scene, intersecting each ray with all objects (functions `intersectObjects`, `raySphereIntersection` and `rayPlaneIntersection`). If there is an intersection, `trace` calls `shade` to shade the point.

After implementing the necessary functions, your rendered scene should look like the following:

![Ambient component](ambient.png)

#### Task 2
You should now implement the Blinn-Phong model and consider the diffuse component when shading points. Remember that you need to compute a light vector in order to compute the diffuse component. You must also take into account shadows, implementing function `isInShadow` and calling it when shading the scene.

After implementing it, your rendered scene should look like the following:

![Diffuse component](diffuse.png)

#### Task 3
You should take into account the specular component when shading points. Remember that you need to compute the half-way vector in order to compute the specular component.

After implementing the necessary functions, your rendered scene should look like the following:

![Specular component](specular.png)

#### Task 4
You should now consider reflected rays. In the `shade` function, if the reflection checkbox is toggled, trace **new** rays from the intersection point (and reflected considering the object's normal). You should increase the depth count when tracing the new ray with the `trace` function. The maximum recurssion depth is determined by the `maxDepth` variable and can also be adjusted via the user interface.

After implementing the necessary functions, your rendered scene should look like the following when considering a max depth of 1:

![Reflection component](reflection_1.png)

And should look like the following when considering a max depth of 5:

![Reflection component](reflection_5.png)


#### JSON format

The JSON file contains a scene description, with camera information (position, fov, direction), objects (spheres and planes), and the position of light sources. Each object contains its center position, radius (for spheres), normal (for planes), specular exponent, and specular, ambient, diffuse and reflective constants.

The following is an example of a scene JSON file:

```javascript
{
    "camera": {
        "position": [0,-5,5],
        "fov": 75,
        "direction": [0,0,0]
    },
    "objects": [
        {
            "center": [0,0,0],
            "normal": [0,-1,0],
            "color": [255,255,255],
            "specularExponent": 1,
            "specularK": 0,
            "ambientK": 0.1,
            "diffuseK": 0.2,
            "reflectiveK": 0.5,
            "type": "plane"
        },
        {
            "center": [0,-1.25,0],
            "radius": 1.25,
            "color": [255,0,0],
            "specularExponent": 1000,
            "specularK": 0.1,
            "ambientK": 0.1,
            "diffuseK": 0.2,
            "reflectiveK": 0.25,
            "type": "sphere"
        }
    ],
    "lights": [
        {
            "position": [-2,-5,0]
        }
    ]
}

```

### Submission
The delivery of the assignments will be done using GitHub Classes. It will not be necessary to use any external JavaScript library for your assignments. If you do find the need to use additional libraries, please send us an email or Discord message to get approval. Your assignment should contain at least the following files:
- index.html: the main HTML file.
- raytracer.js: assignment main source code.
- README.md and image files: markdown readme file with a description of your program.

### Grading
The code will be evaluated on Firefox. Your submission will be graded according to the quality of the image results, interactions, and correctness of the implemented algorithms. Your README.me file will also be graded. 

To get a D on the assignment, your application should be able to load a JSON file in the format specified above, and ray trace a scene only considering the ambient component. To get a C on the assignment, you should also implement the diffuse component and shadows. To get a B, you should also implement the specular component. To get an A on the assignment, the application must be able to ray trace a scene considering ambient, diffuse, specular components, as well as reflection, and have a detailed readme file.
