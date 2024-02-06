import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
    selector: 'app-chat-message',
    standalone: true,
    imports: [CommonModule, MarkdownModule ],
    templateUrl: './chatMessage.component.html',
    styleUrl: './chatMessage.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent { 

    @Input({required:true}) text!:string;

 }
