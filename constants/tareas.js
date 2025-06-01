export const tareas = [
    {
        id: '1',
        title: 'Hacer las compras',
        completed: false,
        subtasks: [
            {
                id: '1-1',
                title: 'Comprar pan',
                description: 'Ir a la panadería y comprar 1kg',
                completed: false
            },
            {
                id: '1-2',
                title: 'Comprar leche',
                description: 'Comprar 2 litros de leche',
                completed: true
            }
        ]
    },
    {
        id: '2',
        title: 'Pasear al perro',
        completed: true,
        subtasks: [
            {
                id: '2-1',
                title: 'Llevar bolsitas',
                description: 'Llevar para limpiar si hace sus necesidades',
                completed: true
            },
            {
                id: '2-2',
                title: 'Levar pelota',
                description: 'Llevar la pelota para jugar en el parque',
                completed: true
            }
        ]
    },
    {
        id: '3',
        title: 'Estudiar',
        completed: false,
        subtasks: [
            {
                id: '3-1',
                title: 'Guía de TensorFlow',
                description: 'Leer del capitulo 1 al 3',
                completed: true
            },
            {
                id: '3-2',
                title: 'Resolver ejercicios',
                description: 'Hacer ejercicios del capitulo 2',
                completed: false
            },
            {
                id: '3-3',
                title: 'Repasar estadística',
                description: 'Practicar regresión lineal y logística',
                completed: false
            }
        ]
    }
];
