import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

import Image from 'next/image';
import calc from '../public/calc_app_pic.png';
import socialApp from '../public/social-media-app.png';
import drawingApp from '../public/drawing-app.png';
import gpaV2 from '../public/gpa-pic.png';
import gallery from '../public/photo-gallery.png';
import cardsApp from '../public/tcg-picture.png';

function Projects() {
    return (
        <div>
            <h1 className="text-center text-3xl mt-2 dark:text-gray-200 pb-10">Projects</h1>

            <div className="flex justify-center">
                <div className="pb-10 justify-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 sm:px-0">
                    <div>
                        <Card className="hover:scale-105 transition-all mt-6 w-96">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <Image className="object-fill h-56 w-96"
                                    src={socialApp}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Social Media Application
                                </Typography>
                                <Typography color="black">
                                    An online social media platform enabling users to share photos and interact with a clean, aesthetically pleasing, responsive UI.
                                    Features include photo sharing, likes and followers.
                                </Typography>
                                <Typography className="pt-8">
                                    Implmented using ReactJS, TailwindCSS, Firebase
                                </Typography>
                            </CardBody>
                            <div className="flex justify-center">
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://zingy-bunny-865592.netlify.app', '_blank')}>Demo</Button>
                                </CardFooter>
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://github.com/Siam63/social-media-app', '_blank')}>View Code</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>

                    <div>
                        <Card className="hover:scale-105 transition-all mt-6 w-96">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <Image className="object-fill h-56 w-96"
                                    src={cardsApp}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Trading Card Game Web Store
                                </Typography>
                                <Typography color="black">
                                    A fully-functional online webstore, allowing users to browse various products, add items to their cart,
                                    and checkout. Admin login allows addition of items, editing capabilities as well as removing items from database
                                </Typography>
                                <Typography className="pt-2">
                                    Implmented using ReactJS, NodeJS, MongoDB, TailwindCSS
                                </Typography>
                            </CardBody>
                            <div className="flex justify-center">
                                <CardFooter className="pt-0">
                                    <Button >Demo</Button>
                                </CardFooter>
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://github.com/Siam63/tcg-store', '_blank')}>View Code</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>

                    <div>
                        <Card className="hover:scale-105 transition-all mt-6 w-96">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <Image className="object-fill h-56 w-96"
                                    src={drawingApp}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Drawing App
                                </Typography>
                                <Typography color="black">
                                    An online web application enabling users to share photos and interact with a clean, aesthetically pleasing, responsive UI.
                                    Features include photo sharing, likes and followers.
                                </Typography>
                                <Typography className="pt-2">
                                    Implmented using ReactJS & Canvas Library
                                </Typography>
                            </CardBody>
                            <div className="flex justify-center">
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://delicate-druid-5f2d98.netlify.app', '_blank')}>Demo</Button>
                                </CardFooter>
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://github.com/Siam63/react-drawing-app', '_blank')}>View Code</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>

                    <div>
                        <Card className="hover:scale-105 transition-all mt-6 w-96">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <Image className="object-fill h-56 w-96"
                                    src={gpaV2}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    GPA Calculator
                                </Typography>
                                <Typography color="black">
                                    An online web application enabling users to share photos and interact with a clean, aesthetically pleasing, responsive UI.
                                    Features include photo sharing, likes and followers.
                                </Typography>
                                <Typography className="pt-2">
                                    Implmented using ReactJS & TailwindCSS
                                </Typography>
                            </CardBody>
                            <div className="flex justify-center">
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://endearing-starlight-c95a6d.netlify.app', '_blank')}>Demo</Button>
                                </CardFooter>
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://github.com/Siam63/gpa-calc-v2', '_blank')}>View Code</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>

                    <div>
                        <Card className="hover:scale-105 transition-all mt-6 w-96">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <Image className="object-fill h-56 w-96"
                                    src={gallery}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Photo Gallery
                                </Typography>
                                <Typography color="black">
                                    A website to showcase all the different photos I have taken over the last few months in a beautiful,
                                    aesthetically pleasing format.
                                </Typography>
                                <Typography className="pt-9">
                                    Implmented using ReactJS & TailwindCSS
                                </Typography>
                            </CardBody>
                            <div className="flex justify-center">
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://prismatic-rolypoly-a03595.netlify.app/', '_blank')}>Demo</Button>
                                </CardFooter>
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://github.com/Siam63/gallery', '_blank')}>View Code</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>

                    <div>
                        <Card className="hover:scale-105 transition-all mt-6 w-96">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <Image className="object-fill h-56 w-96"
                                    src={calc}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Simple Calculator
                                </Typography>
                                <Typography color="black">
                                    Aesthetically pleasing, easy to use calculator which mimics all the functionalities of a normal calculator.
                                    Users can add, subtract, multiply, delete whole numbers or decimal values.
                                </Typography>
                                <Typography className="pt-2">
                                    Implmented using JavaScript, HTML & CSS
                                </Typography>
                            </CardBody>
                            <div className="flex justify-center">
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://extraordinary-pithivier-d8fe55.netlify.app', '_blank')}>Demo</Button>
                                </CardFooter>
                                <CardFooter className="pt-0">
                                    <Button onClick={() => window.open('https://github.com/Siam63/js_calculator', '_blank')}>View Code</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
