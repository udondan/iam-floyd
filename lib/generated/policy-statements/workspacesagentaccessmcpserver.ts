import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [agentaccess-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesagentaccessmcpserver.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AgentaccessMcp extends PolicyStatement {
  public servicePrefix = 'agentaccess-mcp';

  /**
   * Statement provider for service [agentaccess-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesagentaccessmcpserver.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to perform double click at coordinates
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toDoubleClick() {
    return this.to('DoubleClick');
  }

  /**
   * Grants permission to capture screen state
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toGetScreenshot() {
    return this.to('GetScreenshot');
  }

  /**
   * Grants permission to hold key down
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toHoldKey() {
    return this.to('HoldKey');
  }

  /**
   * Grants permission to initialize sessions and discover tools
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toInvokeMcp() {
    return this.to('InvokeMcp');
  }

  /**
   * Grants permission to press key or key combination
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toKeyPress() {
    return this.to('KeyPress');
  }

  /**
   * Grants permission to perform left mouse click at coordinates
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toLeftClick() {
    return this.to('LeftClick');
  }

  /**
   * Grants permission to click and drag between coordinates
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toLeftClickDrag() {
    return this.to('LeftClickDrag');
  }

  /**
   * Grants permission to press and hold left mouse button
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toLeftMouseDown() {
    return this.to('LeftMouseDown');
  }

  /**
   * Grants permission to release left mouse button
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toLeftMouseUp() {
    return this.to('LeftMouseUp');
  }

  /**
   * Grants permission to perform middle mouse click at coordinates
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toMiddleClick() {
    return this.to('MiddleClick');
  }

  /**
   * Grants permission to move cursor to coordinates
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toMovePointer() {
    return this.to('MovePointer');
  }

  /**
   * Grants permission to perform right mouse click at coordinates
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toRightClick() {
    return this.to('RightClick');
  }

  /**
   * Grants permission to scroll in any direction
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toScroll() {
    return this.to('Scroll');
  }

  /**
   * Grants permission to perform triple click at coordinates
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toTripleClick() {
    return this.to('TripleClick');
  }

  /**
   * Grants permission to type text string
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStackArn()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   */
  public toTypeText() {
    return this.to('TypeText');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DoubleClick',
      'HoldKey',
      'InvokeMcp',
      'KeyPress',
      'LeftClick',
      'LeftClickDrag',
      'LeftMouseDown',
      'LeftMouseUp',
      'MiddleClick',
      'MovePointer',
      'RightClick',
      'Scroll',
      'TripleClick',
      'TypeText'
    ],
    Read: [
      'GetScreenshot'
    ]
  };

  /**
   * Filters access by the ARN of the WorkSpaces Applications stack
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/
   *
   * Applies to actions:
   * - .toDoubleClick()
   * - .toGetScreenshot()
   * - .toHoldKey()
   * - .toInvokeMcp()
   * - .toKeyPress()
   * - .toLeftClick()
   * - .toLeftClickDrag()
   * - .toLeftMouseDown()
   * - .toLeftMouseUp()
   * - .toMiddleClick()
   * - .toMovePointer()
   * - .toRightClick()
   * - .toScroll()
   * - .toTripleClick()
   * - .toTypeText()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifStackArn(value: string | string[], operator?: Operator | string) {
    return this.if(`StackArn`, value, operator ?? 'ArnLike');
  }
}
