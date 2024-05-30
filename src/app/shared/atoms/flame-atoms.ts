import { FlameIconModule } from '@ngx-mxflame/atoms/icon';
import { FlameCardModule } from '@ngx-mxflame/atoms/card';
import { FlameButtonModule } from '@ngx-mxflame/atoms/button';
import { FlameSidenavModule } from '@ngx-mxflame/molecules/sidenav';
import { FlameSelectModule } from '@ngx-mxflame/atoms/select';

import {
  FlameLoaderModule,
  FlameLoaderService
} from '@ngx-mxflame/atoms/loader-overlay';
import { FlameSpinnerModule } from '@ngx-mxflame/atoms/spinner';
import { FileAttachmentInputModule } from '@ngx-mxflame/atoms/file-attachment-input';

export const FLAME_ATOMS = [
  FlameIconModule,
  FlameCardModule,
  FlameButtonModule,
  FlameLoaderModule,
  FlameSpinnerModule,
  FlameSidenavModule,
  FileAttachmentInputModule,
  FlameCardModule,
  FlameSelectModule
];

export const FLAME_SERVICES = [FlameLoaderService];