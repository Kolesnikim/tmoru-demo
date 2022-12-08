import { AnimationMetadata, style, animate } from '@angular/animations';

export function animationFadeIn(duration: number): AnimationMetadata[] {
    return [
        style({
            opacity: 0,
        }),
        animate(
            `${duration}s ease-in`,
            style({
                opacity: 1,
            })
        )
    ];
}