import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    options: {
        singleton: true
    },
    fields: [
        defineField({
            type: 'object',
            name: 'hero',
            fields: [
                { type: 'string', name: 'title' },
                { type: 'string', name: 'text' },
                { type: 'boolean', name: 'showButton' },
                { type: 'string', name: 'buttonLabel' },
                { type: 'image', name: 'backgroundImg' },
                {
                    name: 'stats',
                    type: 'array',
                    title: 'Stats for hero',
                    of: [
                        defineArrayMember({
                            type: 'object',
                            name: 'stat',
                            fields: [
                                { type: 'string', name: 'value' },
                                { type: 'string', name: 'text' },
                            ]
                        }),
                    ]
                }
            ]
        }),
        defineField({
            type: 'object',
            name: 'features',
            fields: [
                {
                    name: 'feature',
                    type: 'array',
                    title: 'Feature of app',
                    of: [
                        defineArrayMember({
                            type: 'object',
                            name: 'feature',
                            fields: [
                                { type: 'image', name: 'icon' },
                                { type: 'string', name: 'title' },
                                { type: 'string', name: 'description' },
                            ]
                        }),
                    ]
                }
            ]
        }),
        defineField({
            type: 'object',
            name: 'pricing',
            fields: [
                { type: 'string', name: 'title' },
                { type: 'string', name: 'text' },
                { type: 'string', name: 'buttonLabel' },
                {
                    name: 'offers',
                    type: 'array',
                    title: 'Offers',
                    of: [
                        defineArrayMember({
                            type: 'object',
                            name: 'price',
                            fields: [
                                { type: 'string', name: 'title' },
                                { type: 'number', name: 'price' },
                                { 
                                    type: 'array', 
                                    name: 'content',
                                    title: 'Content',
                                    of : [
                                        { type: 'string', name: 'feature'}
                                    ]
                                },
                            ]
                        }),
                    ]
                }
            ]
        }),
        defineField({
            type: 'object',
            name: 'client',
            fields: [
                { type: 'string', name: 'title' },
                { type: 'string', name: 'text' },
                {
                    name: 'comment',
                    type: 'array',
                    title: 'Comment',
                    of: [
                        defineArrayMember({
                            type: 'object',
                            name: 'comment',
                            fields: [
                                { type: 'string', name: 'text' },
                                { type: 'string', name: 'name' },
                                { type: 'string', name: 'work' },
                            ]
                        }),
                    ]
                }
            ]
        })
    ]
})