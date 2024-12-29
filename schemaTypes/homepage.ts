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
    ]
})